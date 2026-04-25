// ─── Simulation Configuration ───────────────────────────────────────────────
const DEFAULT_PASSWORD = "password123";
const COMMON_PASSWORDS = [
    // ── Top 25 originals ─────────────────────────────────────────────────────
    "123456", "password", "12345678", "qwerty", "12345",
    "admin", "welcome", "login", "secret", "nexus",
    "portal", "root", "superadmin", "access", "secure",
    "dragon", "baseball", "monkey", "football", "shadow",
    "password123", "master", "hunter2", "letmein", "oracle",

    // ── Top leaked passwords ──────────────────────────────────────────────────
    "123456789", "1234567890", "1234567", "111111", "000000",
    "1234", "abc123", "iloveyou", "sunshine", "princess",
    "admin123", "pass", "pass123", "test", "test123",
    "guest", "guest123", "user", "user123", "demo",
    "changeme", "default", "password1", "password12", "passwd",
    "p@ssword", "p@ss", "p@ssw0rd", "passw0rd", "pa$$word",

    // ── Names & common words ──────────────────────────────────────────────────
    "michael", "jessica", "thomas", "charlie", "andrew",
    "daniel", "jordan", "harley", "ranger", "batman",
    "superman", "spiderman", "trustno1", "sunshine1", "whatever",
    "hello", "hello123", "qwerty123", "abc", "abcdefg",
    "654321", "123321", "112233", "696969", "121212",
    "1q2w3e", "1q2w3e4r", "zxcvbnm", "qazwsx", "1qaz2wsx",

    // ── Sports & pop culture ──────────────────────────────────────────────────
    "soccer", "hockey", "basketball", "tennis", "boxing",
    "liverpool", "chelsea", "arsenal", "barcelona", "madrid",
    "metallica", "nirvana", "pokemon", "naruto", "minecraft",

    // ── Keyboard walks & patterns ─────────────────────────────────────────────
    "asdf", "asdfgh", "asdfghjkl", "zxcvbn", "poiuyt",
    "qwert", "mnbvcxz", "lkjhgf", "plokmijn", "1111",
    "2222", "3333", "4444", "5555", "6666",
    "7777", "8888", "9999", "0000", "1010",

    // ── Leet speak ────────────────────────────────────────────────────────────
    "l3tm3in", "s3cur3", "h4ck3r", "4dm1n", "r00t",
    "p4ssw0rd", "s3cr3t", "k3yb04rd", "m4st3r", "0r4cl3",
    "sup3r", "ultra", "hyper", "cyber", "alpha",
    "bravo", "delta", "omega", "sigma", "gamma",

    // ── Years & dates ─────────────────────────────────────────────────────────
    "2020", "2021", "2022", "2023", "2024",
    "january", "february", "march", "april", "may",
    "june", "july", "august", "september", "october",
    "november", "december", "spring", "summer", "winter",

    // ── Tech & system words ───────────────────────────────────────────────────
    "system", "server", "network", "router", "switch",
    "firewall", "database", "backup", "config", "setup",
    "install", "service", "manager", "control", "panel",
    "nexusadmin", "sysadmin", "webadmin", "administrator", "adminpass",

    // ── Password variations ───────────────────────────────────────────────────
    "password1!", "Password1", "Password123", "PASSWORD", "passwor",
    "mypassword", "newpassword", "oldpassword", "temppass", "temp123",

    // ── Animals ───────────────────────────────────────────────────────────────
    "tiger", "lion", "eagle", "falcon", "wolf",
    "panther", "jaguar", "cobra", "viper", "shark",
    "dolphin", "penguin", "rabbit", "turtle", "parrot",

    // ── Misc common ───────────────────────────────────────────────────────────
    "love", "loveyou", "iloveu", "baby", "angel",
    "star", "moon", "sun", "fire", "ice",
    "black", "white", "blue", "green", "red",
    "gold", "silver", "diamond", "crystal", "matrix",

    // ── University themed ─────────────────────────────────────────────────────
    "gain123", "gainuniversity", "university", "student", "student123",
    "campus", "campus123", "college", "college123", "scholar",
    "academic", "lecture", "library", "classpass", "homework",
    "semester", "admission", "faculty", "professor", "tuition",
    "gainpass", "gainadmin", "gainstudent", "gainlogin", "gain2024",

    // ── More male/female names ────────────────────────────────────────────────
    "jennifer", "ashley", "amanda", "melissa", "stephanie",
    "christopher", "matthew", "joshua", "nicholas", "joseph",
    "robert", "william", "james", "john", "david",
    "sarah", "emily", "taylor", "madison", "samantha",
    "brandon", "tyler", "kevin", "ryan", "jason",

    // ── Indian names (common) ─────────────────────────────────────────────────
    "rahul", "rohit", "priya", "neha", "pooja",
    "amit", "ravi", "suresh", "ramesh", "anil",
    "sunita", "kavita", "deepak", "vijay", "ajay",
    "arjun", "kiran", "sanjay", "nitin", "rakesh",

    // ── Number combos ─────────────────────────────────────────────────────────
    "11111111", "22222222", "33333333", "44444444", "55555555",
    "12341234", "56785678", "11223344", "99999999", "10203040",
    "13579", "24680", "112358", "142857", "31415926",
    "123abc", "456def", "789ghi", "321cba", "999888",

    // ── Movies & music ────────────────────────────────────────────────────────
    "starwars", "batman123", "superman1", "avengers", "ironman",
    "thematrix", "inception", "interstellar", "avatar", "titanic",
    "eminem", "drake", "rihanna", "beyonce", "adele",
    "coldplay", "linkinpark", "greenday", "radiohead", "acdc",

    // ── Cities & places ───────────────────────────────────────────────────────
    "london", "newyork", "paris", "tokyo", "berlin",
    "sydney", "mumbai", "delhi", "dubai", "singapore",
    "chicago", "losangeles", "toronto", "moscow", "beijing",

    // ── Phrases ───────────────────────────────────────────────────────────────
    "letmein1", "openup", "opensesame", "godmode", "cheatcode",
    "nohack", "hackme", "tryharder", "youshallnotpass", "forbidden",
    "ilovejesus", "godisgood", "blessed", "mercy", "grace",

    // ── More leet & symbol variants ───────────────────────────────────────────
    "p455w0rd", "pa55word", "pa55w0rd", "passw0rd1", "p@$$w0rd",
    "4dmin1", "adm1n123", "@dmin", "4dministr4tor", "r00t123",
    "s3cur1ty", "1ntern3t", "w3lcom3", "ch4ng3me", "t3st123",

    // ── Target-specific ───────────────────────────────────────────────────────
    "nexus123", "nexuspass", "nexusroot", "portalpass", "portal123",
    "sector7", "classified", "topSecret", "topsecret", "restricted",
    "abcd1234", "abcd123", "1234abcd", "qwer1234", "asdf1234",
    "gain@123", "gain#2024", "Gain123", "GAIN123", "gaIn2024",

    // ── Long common passphrases ───────────────────────────────────────────────
    "iloveyou123", "ihateyou", "monkey123", "dragon123", "tiger123",
    "admin@123", "root@123", "user@123", "pass@123", "login@123",
    "welcome1", "welcome123", "Welcome1", "Welcome@1", "welc0me",
    "hello@123", "hello_world", "helloworld", "HelloWorld", "h3lloWorld",
];



// Initialise default password if never set
if (!localStorage.getItem('targetPassword')) {
    localStorage.setItem('targetPassword', DEFAULT_PASSWORD);
}

// ─── Shared: Set-Password Form (works on ANY page that has the form) ─────────
const setPasswordForm    = document.getElementById('setPasswordForm');
const newPasswordInput   = document.getElementById('newPassword');
const setPasswordMsg     = document.getElementById('setPasswordMsg');
const currentPassDisplay = document.getElementById('currentPassDisplay');
const currentAdminDisplay = document.getElementById('currentAdminDisplay');

// Helper: get the most recently registered username
const getLastAdmin = () => {
    const users = JSON.parse(localStorage.getItem('nexusUsers') || '{}');
    const keys = Object.keys(users);
    return keys.length > 0 ? keys[keys.length - 1] : '—';
};

// Populate displays
if (currentPassDisplay) {
    currentPassDisplay.textContent = localStorage.getItem('targetPassword');
}
if (currentAdminDisplay) {
    currentAdminDisplay.textContent = getLastAdmin();
}
const loggedInDisplay = document.getElementById('loggedInDisplay');
if (loggedInDisplay) {
    const loggedIn = localStorage.getItem('loggedInUser');
    loggedInDisplay.textContent = loggedIn || 'none';
    if (loggedIn) loggedInDisplay.style.color = '#a78bfa';
}

if (setPasswordForm) {
    setPasswordForm.onsubmit = (e) => {
        e.preventDefault();
        const newPass = newPasswordInput.value.trim();
        if (!newPass) return;
        localStorage.setItem('targetPassword', newPass);
        if (currentPassDisplay) currentPassDisplay.textContent = newPass;
        if (setPasswordMsg) {
            setPasswordMsg.textContent = `✓ Password updated to "${newPass}"`;
            setTimeout(() => { setPasswordMsg.textContent = ''; }, 3000);
        }
        newPasswordInput.value = '';
    };
}


// ─── Tab Switcher (global, used by onclick in HTML) ──────────────────────────
function switchTab(tab) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tab === 'login' ? 'loginForm' : 'signupForm').classList.add('active');
    document.getElementById(tab === 'login' ? 'tabLogin' : 'tabSignup').classList.add('active');
    // Clear messages on switch
    ['loginMsg','signupMsg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    });
}

// ─── Target Page Logic ────────────────────────────────────────────────────────
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    // ── Helpers ──
    const getUsers = () => JSON.parse(localStorage.getItem('nexusUsers') || '{}');
    const saveUsers = (u) => localStorage.setItem('nexusUsers', JSON.stringify(u));

    const loginMsg  = document.getElementById('loginMsg');
    const loginBtn  = document.getElementById('loginBtn');
    const signupMsg = document.getElementById('signupMsg');
    const signupBtn = document.getElementById('signupBtn');

    // ── LOGIN ──
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUser').value.trim();
        const password = document.getElementById('loginPass').value;

        loginBtn.disabled    = true;
        loginBtn.textContent = 'Verifying...';
        loginMsg.textContent = '';

        await new Promise(r => setTimeout(r, 800)); // server delay

        const users = getUsers();

        if (!users[username]) {
            loginMsg.style.color = 'var(--danger)';
            loginMsg.textContent = '✗ Username not found. Please sign up first.';
        } else if (users[username] !== password) {
            loginMsg.style.color = 'var(--danger)';
            loginMsg.textContent = '✗ ACCESS DENIED. Incorrect password.';
        } else {
            loginMsg.style.color  = 'var(--success)';
            loginMsg.textContent  = `✓ ACCESS GRANTED. Welcome back, ${username}!`;
            loginBtn.style.background = 'var(--success)';
            loginBtn.textContent = `Authorized as ${username} ✓`;
            localStorage.setItem('loggedInUser', username);
            return; // keep button disabled on success
        }

        loginBtn.disabled    = false;
        loginBtn.textContent = 'Authorize Access';
    };

    // ── SIGN UP ──
    const signupForm = document.getElementById('signupForm');
    signupForm.onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUser').value.trim();
        const password = document.getElementById('signupPass').value;
        const confirm  = document.getElementById('signupPassConfirm').value;

        signupMsg.textContent = '';
        signupBtn.disabled    = true;
        signupBtn.textContent = 'Creating...';

        await new Promise(r => setTimeout(r, 600));

        if (username.length < 3) {
            signupMsg.style.color = 'var(--danger)';
            signupMsg.textContent = '✗ Username must be at least 3 characters.';
        } else if (password.length < 4) {
            signupMsg.style.color = 'var(--danger)';
            signupMsg.textContent = '✗ Password must be at least 4 characters.';
        } else if (password !== confirm) {
            signupMsg.style.color = 'var(--danger)';
            signupMsg.textContent = '✗ Passwords do not match.';
        } else {
            const users = getUsers();
            if (users[username]) {
                signupMsg.style.color = 'var(--danger)';
                signupMsg.textContent = '✗ Username already taken. Choose another.';
            } else {
                users[username] = password;
                saveUsers(users);
                // Also update the brute-force target password to this new user's password
                localStorage.setItem('targetPassword', password);
                if (currentPassDisplay) currentPassDisplay.textContent = password;

                signupMsg.style.color = 'var(--success)';
                signupMsg.textContent = `✓ Account created! You can now login as "${username}".`;
                setTimeout(() => switchTab('login'), 1500);
            }
        }

        signupBtn.disabled    = false;
        signupBtn.textContent = 'Create Account';
    };
}

// ─── Attacker Dashboard Logic ─────────────────────────────────────────────────
const startBtn       = document.getElementById('startBtn');
const resetBtn       = document.getElementById('resetBtn');
const logs           = document.getElementById('logs');
const statAttempts   = document.getElementById('statAttempts');
const statSpeed      = document.getElementById('statSpeed');
const statWordlist   = document.getElementById('statWordlist');
const statResult     = document.getElementById('statResult');
const statusIndicator = document.getElementById('statusIndicator');

if (startBtn) {
    let isAttacking = false;
    let attempts    = 0;
    let startTime   = null;

    if (statWordlist) statWordlist.textContent = COMMON_PASSWORDS.length;

    const addLog = (text, type = '') => {
        const div = document.createElement('div');
        div.className   = `log-entry ${type}`;
        div.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
        logs.appendChild(div);
        logs.scrollTop = logs.scrollHeight;
        if (logs.children.length > 200) logs.removeChild(logs.firstChild);
    };

    const runAttack = async () => {
        isAttacking = true;
        startBtn.textContent = 'STOP ATTACK';
        statResult.textContent   = 'RUNNING';
        statResult.style.color   = 'var(--warning)';
        statusIndicator.textContent = 'ACTIVE';
        statusIndicator.style.color = 'var(--danger)';
        startTime = Date.now();

        // Read the LIVE password at the moment of attack start
        const TARGET_PASSWORD = localStorage.getItem('targetPassword') || DEFAULT_PASSWORD;
        addLog(`Target: gain-university.edu/student-portal`, 'info');
        addLog(`Password loaded from registry. Starting dictionary attack (${COMMON_PASSWORDS.length} entries)...`, 'info');

        for (const pass of COMMON_PASSWORDS) {
            if (!isAttacking) break;

            attempts++;
            statAttempts.textContent = attempts;
            const elapsed = (Date.now() - startTime) / 1000 || 0.001;
            statSpeed.textContent = (attempts / elapsed).toFixed(1);

            addLog(`Trying: ${pass}`, '');
            await new Promise(r => setTimeout(r, 150));

            if (pass === TARGET_PASSWORD) {
                addLog(`SUCCESS! Password cracked → "${pass}"`, 'success');
                statResult.textContent    = 'SUCCESS';
                statResult.style.color    = 'var(--success)';
                statusIndicator.textContent = 'CRACKED';
                statusIndicator.style.color = 'var(--success)';
                isAttacking = false;
                startBtn.textContent  = 'START ATTACK';
                startBtn.disabled     = true;
                return;
            } else {
                addLog(`FAIL: "${pass}"`, 'fail');
            }
        }

        if (isAttacking) {
            addLog('─── Wordlist exhausted ─────────────────────────────', 'info');
            addLog('Password not found in current dictionary.', 'fail');
            addLog('⚠ Update your wordlist and try again.', 'info');
            statResult.textContent      = 'NOT FOUND';
            statResult.style.color      = 'var(--warning)';
            statusIndicator.textContent = 'UPDATE WORDLIST';
            statusIndicator.style.color = 'var(--warning)';
            isAttacking = false;
            startBtn.textContent = 'START ATTACK';
        }
    };

    startBtn.onclick = () => {
        if (isAttacking) {
            isAttacking = false;
            startBtn.textContent        = 'START ATTACK';
            statResult.textContent      = 'STOPPED';
            statResult.style.color      = 'var(--warning)';
            statusIndicator.textContent = 'READY';
            statusIndicator.style.color = 'var(--hacker-green)';
        } else {
            runAttack();
        }
    };

    resetBtn.onclick = () => {
        isAttacking = false;
        attempts    = 0;
        logs.innerHTML              = '<div class="log-entry info">System reset. Ready for new attack...</div>';
        statAttempts.textContent    = '0';
        statSpeed.textContent       = '0';
        statResult.textContent      = 'IDLE';
        statResult.style.color      = 'var(--hacker-green)';
        statusIndicator.textContent = 'READY';
        statusIndicator.style.color = 'var(--hacker-green)';
        startBtn.textContent        = 'START ATTACK';
        startBtn.disabled           = false;

        // Refresh the displayed current password
        if (currentPassDisplay) {
            currentPassDisplay.textContent = localStorage.getItem('targetPassword');
        }
    };
}
