let signupEmail = document.getElementById('signup_email')
let signupPass = document.getElementById('signup_password')
let signupBtn = document.getElementById('signup-btn')
let signupBtnLoader = document.getElementById('loading_btn_spinner')
let loginBtn = document.getElementById('login_btn')
let loginEmail = document.getElementById('login_email')
let loginPass = document.getElementById('login_password')



async function signup() {
  try {
    signupBtnLoader.style.display = 'block';
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail.value,
      password: signupPass.value,
    });

    if (error) throw error;
    if (data) {
      alert('Please check your email for confirmation');
      // Redirecting to the login page after successful signup
      window.location.href = '/login.html';
    }
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  } finally {
    signupBtnLoader.style.display = 'none';
  }
}

async function login() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPass.value,
    });

    if (error) throw error;
    if (data) {
      window.location.href = '/dash.html';
    }
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}





if(loginBtn) {
  loginBtn.addEventListener('click' , login)

}

if (signupBtn) {
  signupBtn.addEventListener('click', signup);
}