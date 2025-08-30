from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from .services import *
class Employee_db(APIView):
    class Validate(serializers.Serializer):
        Firstname=serializers.CharField(required=True)
        Lastname=serializers.CharField(required=False)
        email=serializers.EmailField(required=True)
        role=serializers.CharField(required=True)

    def post(self,request):
        a=self.Validate(data=request.data)
        print(request.data)
        a.is_valid(raise_exception=True)
        result=add_emp(**request.data)
        return Response({"data":result},status=status.HTTP_201_CREATED)
class Get(APIView):
    def get(self, request):
        try:
            data1 = fetch_emp() 
            print(data1)
            return Response({'data':data1}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class UpdateUserDetails(APIView):
    class InputSerializer(serializers.Serializer):
        id = serializers.IntegerField(required=True)
        email = serializers.EmailField(required=True)
        
        password = serializers.CharField(required=True)

    def post(self, request):
        
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        role_code = update_user_details(**serializer.validated_data)
        return Response({'data': {'role_code': role_code}}, status=status.HTTP_200_OK)