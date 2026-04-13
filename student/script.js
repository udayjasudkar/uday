// Form validation and table management
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const tableBody = document.getElementById('tableBody');
    let studentCounter = 1;

    // Enhanced form submission with validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const studentData = {
            id: studentCounter++,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            course: document.getElementById('course').options[document.getElementById('course').selectedIndex].text,
            gender: document.querySelector('input[name="gender"]:checked')?.value || 'Not specified',
            skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value).join(', ') || 'None',
            age: document.getElementById('age').value,
            status: Math.random() > 0.5 ? 'Active' : 'Pending'
        };

        // Client-side validation
        if (!validateForm(studentData)) {
            showAlert('Please fill all required fields correctly!', 'error');
            return;
        }

        // Add to table
        addToTable(studentData);
        
        // Show success message
        showAlert('Student registered successfully!', 'success');
        
        // Reset form
        form.reset();
    });

    // Reset button functionality
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        tableBody.innerHTML = '';
        studentCounter = 1;
        showAlert('Form and table reset!', 'info');
    });

    // Validation function
    function validateForm(data) {
        if (!data.name || data.name.length < 2) return false;
        if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) return false;
        if (!data.course || data.course === 'Select a course') return false;
        if (data.age < 16 || data.age > 100) return false;
        return true;
    }

    // Add student to table
    function addToTable(student) {
        const row = tableBody.insertRow();
        row.classList.add('student-row');
        
        row.innerHTML = `
            <td>${student.name}</td>
            <td><span class="email-tag">${student.email}</span></td>
            <td><span class="course-badge ${getCourseClass(student.course)}">${student.course}</span></td>
            <td><span class="status-badge ${getStatusClass(student.status)}">${student.status}</span></td>
        `;
    }

    // Utility functions
    function getCourseClass(course) {
        const classes = {
            'Web Development': 'web',
            'Data Science': 'data',
            'Mobile App Development': 'mobile',
            'AI/ML': 'ai'
        };
        return classes[course] || 'default';
    }

    function getStatusClass(status) {
        return status.toLowerCase() === 'active' ? 'success' : 'warning';
    }

    function showAlert(message, type) {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        const colors = {
            success: '#27ae60',
            error: '#e74c3c',
            info: '#3498db'
        };
        
        alert.style.background = colors[type] || '#95a5a6';
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            alert.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }, 3000);
    }

    // Add CSS for dynamic badges (injected)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .email-tag {
            color: #3498db;
            font-family: monospace;
            padding: 4px 8px;
            border-radius: 4px;
            background: #ecf0f1;
        }
        
        .course-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 600;
        }
        
        .course-badge.web { background: #3498db; color: white; }
        .course-badge.data { background: #9b59b6; color: white; }
        .course-badge.mobile { background: #e67e22; color: white; }
        .course-badge.ai { background: #27ae60; color: white; }
        
        .status-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 600;
        }
        
        .status-badge.success { background: #27ae60; color: white; }
        .status-badge.warning { background: #f39c12; color: white; }
        
        .student-row:nth-child(even) { background: #f8f9fa; }
    `;
    document.head.appendChild(style);
});
