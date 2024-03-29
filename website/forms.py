from django.forms import ModelForm

from django.contrib.auth.models import User

from website.models import Client


class UserForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        self.fields['username'].required = True
        self.fields['password'].required = True
        self.fields['email'].required = True
        self.fields['first_name'].required = True
        self.fields['last_name'].required = True

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'email',
            'first_name',
            'last_name'
        ]


class ClientForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super(ClientForm, self).__init__(*args, **kwargs)

    class Meta:
        model = Client
        fields = '__all__'
