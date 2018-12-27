import requests
from zeep import Client
from zeep.cache import SqliteCache
from zeep.transports import Transport

WSDL = 'https://www1.gsis.gr/wsaade/RgWsPublic2/RgWsPublic2?WSDL'

RQ_TIMEOUT = 20


class ClientMixin(object):
    def get_client(self):
        cache = SqliteCache(path='/tmp/sqlite.db', timeout=(60 * 60 * 24))
        transport = Transport(timeout=RQ_TIMEOUT, cache=cache)

        try:
            client = Client(WSDL, transport=transport)
        except requests.exceptions.ConnectionError as e:
            return None
        except requests.exceptions.ReadTimeout as e:
            return None
        else:
            return client


class Gsis(ClientMixin):
    def __init__(self):
        self.client = self.get_client()

    def version_info(self):
        """Returns the app's info

        :returns: 
        :rtype: 

        """
        response = self.client.service.rgWsPublic2VersionInfo()

        return response

    def afm_method(self):
        """Returns an account's info given its afm

        :returns: 
        :rtype: 

        """
        response = self.client.service.rgWsPublic2AfmMethod()

        return response
