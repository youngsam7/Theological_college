(function () {
  const form = document.getElementById('applicationForm');
  if (!form) return;

  // Replace with real Firebase project config before production.
  const firebaseConfig = {
    apiKey: 'REPLACE_ME',
    authDomain: 'REPLACE_ME.firebaseapp.com',
    projectId: 'REPLACE_ME',
    storageBucket: 'REPLACE_ME.appspot.com',
    messagingSenderId: 'REPLACE_ME',
    appId: 'REPLACE_ME'
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('applyStatus');
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      if (!window.firebase || firebaseConfig.apiKey === 'REPLACE_ME') {
        status.textContent = 'Demo mode: connect Firebase keys to submit live applications.';
        form.reset();
        return;
      }
      const app = firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore(app);
      await db.collection('applications').add({ ...payload, submittedAt: new Date().toISOString() });
      status.textContent = 'Application submitted successfully. Admissions will contact you shortly.';
      form.reset();
    } catch (error) {
      status.textContent = 'Submission failed. Please try again.';
      console.error(error);
    }
  });
})();
