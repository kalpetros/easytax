import requests
from zeep import Client
from zeep.cache import SqliteCache
from zeep.transports import Transport
from zeep.wsse.username import UsernameToken

WSDL = 'https://www1.gsis.gr/wsaade/RgWsPublic2/RgWsPublic2?WSDL'

RQ_TIMEOUT = 20


class ClientMixin(object):
    def get_client(self):
        cache = SqliteCache(path='/tmp/sqlite.db', timeout=(60 * 60 * 24))
        transport = Transport(timeout=RQ_TIMEOUT, cache=cache)

        try:
            client = Client(WSDL, transport=transport, wsse=UsernameToken(
                # Give your own. CAUTION: not taxisnet credentials
                'username', 'password'
            ))
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

    def afm_method(self, afm_called_by='', afm_called_for=''):
        """Returns an account's info given its afm

        :returns: 
        :rtype: 

        """
        response = self.client.service.rgWsPublic2AfmMethod(
            INPUT_REC=self.client.get_type('ns1:rg_ws_public2_input_rtType')(
                afm_called_by=afm_called_by,
                afm_called_for=afm_called_for
            )
        )

        return response
