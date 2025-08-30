from .models import *
from rest_framework.exceptions import APIException
def add_emp(**info):
    try:
        emp=Employee_Details(Firstname=info.get('Firstname'),
                             Lastname=info.get('Lastname'),
                             email=info.get('email'),
                             role=info.get('role'))
        emp.save()

        return emp.Firstname
    except Exception as c:
        raise APIException(c)

def fetch_emp():
    # data = Employee_Details.objects.filter(id=1).values().first()  
    data = Employee_Details.objects.all().values()  
    print(data)
    return data

def update_user_details(**data):
    try:
        # chk_dupe_codes = UserDetails.objects.exclude(id=data.get('id')).filter(email=data.get('email'))
        # print(chk_dupe_codes)
        # if chk_dupe_codes.exists():
        #     raise APIException("Duplicate Role Code.")
        
        # user = UserDetails.objects.get(id=data.get('id'))
        user = Employee_Details.objects.filter(id = data.get('id')).first()
        user.email = data.get('email')
        user.password = data.get('')
        user.save()

        return user.email

    except Exception as e:
        raise APIException(str(e))
    
