import sys
import urllib

def get_status_code(url):
    response = urllib.request.urlopen(url)
    iStatusCode = response.getcode()
    print("code: " + str(iStatusCode))


url = sys.agrv[1]
get_status_code(url)