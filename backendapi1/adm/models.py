from django.db import models
from django.contrib.auth.models import User

class Donor(models.Model):
    ORGAN_CHOICES = [
        ("Eye", "eye"),
        ("Lungs", "lungs"),
        ("Kidney", "kidney"),
        ("Liver", "liver"),
        ("Heart", "heart"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="donor_profile")
    age = models.IntegerField()
    blood_group = models.CharField(max_length=5)
    organ = models.CharField(max_length=50, choices=ORGAN_CHOICES)   
    is_approved = models.BooleanField(default=False)  

    def __str__(self):
        return f"Donor: {self.user.username} - {self.organ}"


# ---------------- Recipient ----------------
class Recipient(models.Model):
    ORGAN_CHOICES = [
        ("Eye", "eye"),
        ("Lungs", "lungs"),
        ("Kidney", "kidney"),
        ("Liver", "liver"),
        ("Heart", "heart"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="recipient_profile")
    age = models.IntegerField()
    blood_group = models.CharField(max_length=5)
    required_organ = models.CharField(max_length=50, choices=ORGAN_CHOICES)  
    needs_transplant = models.BooleanField(default=False)  

    def __str__(self):
        return f"Recipient: {self.user.username} - Needs {self.required_organ}"


class TransplantMatch(models.Model):
    donor = models.ForeignKey(Donor, on_delete=models.CASCADE)
    recipient = models.ForeignKey(Recipient, on_delete=models.CASCADE)
    is_compatible = models.BooleanField(default=False)
    agreement_signed = models.BooleanField(default=False)
    surgery_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"Match: Donor {self.donor.user.username} → Recipient {self.recipient.user.username}"

    # def check_compatibility(self):
    #     """Check if donor and recipient are a potential match"""
    #     return (
    #         self.donor.blood_group == self.recipient.blood_group and
    #         self.donor.organ == self.recipient.required_organ and
    #         self.donor.is_approved and
    #         self.recipient.needs_transplant
    #     )


# ---------------- Donor Eye Tests ----------------
class DonorTestResult_Eye(models.Model):
    donor = models.ForeignKey(Donor, on_delete=models.CASCADE, related_name="eye_test_results")
    date_of_test = models.DateField(auto_now_add=True)
    hiv = models.BooleanField(default=False, help_text="Positive if True")
    hepatitis_b = models.BooleanField(default=False)
    hepatitis_c = models.BooleanField(default=False)
    syphilis = models.BooleanField(default=False)
    malaria = models.BooleanField(default=False)
    slit_lamp_clear = models.BooleanField(default=False, help_text="Cornea clarity normal?")
    corneal_pachymetry = models.FloatField(null=True, blank=True, help_text="Thickness in microns")
    specular_microscopy = models.IntegerField(null=True, blank=True, help_text="Endothelial cell count")
    medical_history_clear = models.BooleanField(default=False, help_text="No cancer, sepsis, rabies, COVID, etc.")
    physical_exam_clear = models.BooleanField(default=False, help_text="No trauma, no infection")

    remarks = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Eye Test Results for {self.donor.user.username} on {self.date_of_test}"


class RecipientTestResult_Eye(models.Model):
    recipient = models.ForeignKey(Recipient, on_delete=models.CASCADE, related_name="eye_test_results")
    date_of_test = models.DateField(auto_now_add=True)
    corneal_thickness = models.FloatField(null=True, blank=True, help_text="Thickness in microns")
    corneal_topography = models.TextField(blank=True, null=True, help_text="Shape/irregularities result")
    visual_acuity = models.CharField(max_length=50, blank=True, null=True, help_text="e.g., 6/18, 20/40")
    intraocular_pressure = models.FloatField(null=True, blank=True, help_text="Measured in mmHg")
    cbc_range = models.CharField(max_length=50, blank=True, null=True, help_text="CBC within normal range?")
    blood_sugar = models.FloatField(null=True, blank=True, help_text="mg/dL")
    kidney_function_clear = models.BooleanField(default=False, help_text="Normal kidney function?")
    liver_function_clear = models.BooleanField(default=False, help_text="Normal liver function?")
    hiv = models.BooleanField(default=False)
    hepatitis_b = models.BooleanField(default=False)
    hepatitis_c = models.BooleanField(default=False)
    syphilis = models.BooleanField(default=False)

    remarks = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Eye Test Results for {self.recipient.user.username} on {self.date_of_test}"
