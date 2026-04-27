import redis
import time
import os

# Connect to Redis
r = redis.Redis(host='broker', port=6379, db=0)

print("Consumer started. Waiting for logs...")
while True:
    _, log = r.brpop('logs')
    print(f"PROCESSED LOG: {log.decode('utf-8')}")