const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_PUBLIC_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

function nextStep() {
    const activeStep = document.querySelector('.form-step.active');
    const nextStep = activeStep.nextElementSibling;

    if (nextStep) {
        activeStep.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function prevStep() {
    const activeStep = document.querySelector('.form-step.active');
    const prevStep = activeStep.previousElementSibling;

    if (prevStep) {
        activeStep.classList.remove('active');
        prevStep.classList.add('active');
    }
}

async function submitForm() {
    // Clear previous error messages
    document.getElementById('errorMessage').textContent = '';

    // Get values from all form steps
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const dob = document.getElementById('dob').value;
    const mobile = document.getElementById('mobile').value.trim();
    const selectedClass = document.getElementById('class').value;
    const fatherName = document.getElementById('fatherName').value.trim();
    const fatherAddress = document.getElementById('fatherAddress').value.trim();
    const fatherNumber = document.getElementById('fatherNumber').value.trim();
    const fatherStatus = document.getElementById('fatherStatus').value.trim();
    const motherName = document.getElementById('motherName').value.trim();
    const motherMobile = document.getElementById('motherMobile').value.trim();
    const motherStatus = document.getElementById('motherStatus').value.trim();
    const healthIssues = document.getElementById('healthIssues').value.trim();
    const medications = document.getElementById('medications').value.trim();
    const allergies = document.getElementById('allergies').value.trim();

    // Validate all fields
    if (!firstName || !lastName || !dob || !mobile || selectedClass === '' || !fatherName ||
        !fatherAddress || !fatherNumber || !fatherStatus || !motherName ||
        !motherMobile || !motherStatus || !healthIssues || !medications || !allergies) {
        document.getElementById('errorMessage').textContent = 'Please fill in all fields.';
        return;
    }

    // Prepare the form data
    const formData = {
        firstName,
        lastName,
        dob,
        mobile,
        class: selectedClass,
        fatherName,
        fatherAddress,
        fatherNumber,
        fatherStatus,
        motherName,
        motherMobile,
        motherStatus,
        healthIssues,
        medications,
        allergies,
    };

    // Submit to Supabase
    const { data, error } = await supabase.from('students').insert([formData]);

    if (error) {
        console.error('Error inserting data:', error);
        document.getElementById('errorMessage').textContent = 'There was an error submitting your form. Please try again.';
    } else {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
        document.querySelector('.form-step.active').classList.remove('active');
        document.getElementById('step1').classList.add('active'); // Reset to the first step
    }
}
