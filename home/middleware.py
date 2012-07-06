from django.conf import settings

"""Delete sessionid and csrftoken cookies on logout, for better compatibility with upstream caches."""
class DeleteSessionOnLogoutMiddleware(object):
    def process_response(self, request, response):
        if getattr(request, '_delete_session', False):
            response.delete_cookie(settings.CSRF_COOKIE_NAME, domain=settings.CSRF_COOKIE_DOMAIN)
            response.delete_cookie(settings.SESSION_COOKIE_NAME, settings.SESSION_COOKIE_PATH, settings.SESSION_COOKIE_DOMAIN)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        try:
            view_name = '.'.join((view_func.__module__, view_func.__name__))
            # flag for deletion if this is a logout view
            request._delete_session = view_name in ('django.contrib.admin.sites.logout', 'django.contrib.auth.views.logout')
        except AttributeError:
            pass # if view_func doesn't have __module__ or __name__ attrs
