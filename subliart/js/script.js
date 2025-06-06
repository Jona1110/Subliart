/*
   SubliArt - Scripts principales
   Autor: Manus
   Fecha: 2025
*/

document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (en móviles)
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    
    // Slider de testimonios
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length > 0) {
        // Ocultar todos los testimonios excepto el primero
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Función para mostrar un testimonio específico
        function showTestimonial(index) {
            // Ocultar todos los testimonios
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            // Mostrar el testimonio actual
            testimonials[index].style.display = 'block';
            
            // Añadir animación de fade in
            testimonials[index].style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                opacity += 0.1;
                testimonials[index].style.opacity = opacity;
                if (opacity >= 1) clearInterval(fadeIn);
            }, 30);
        }
        
        // Evento para el botón anterior
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Evento para el botón siguiente
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Cambiar automáticamente cada 5 segundos
        setInterval(() => {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Animación de aparición al hacer scroll
    const animatedElements = document.querySelectorAll('.product-card, .step, .testimonial');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar elementos visibles al cargar la página
    
    // Header fijo con cambio de estilo al hacer scroll
    const header = document.querySelector('header');
    
    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Verificar al cargar la página
    
    // Formulario de contacto (si existe)
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            let isValid = true;
            
            if (name.trim() === '') {
                showError('name', 'Por favor ingresa tu nombre');
                isValid = false;
            } else {
                removeError('name');
            }
            
            if (email.trim() === '') {
                showError('email', 'Por favor ingresa tu email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Por favor ingresa un email válido');
                isValid = false;
            } else {
                removeError('email');
            }
            
            if (message.trim() === '') {
                showError('message', 'Por favor ingresa tu mensaje');
                isValid = false;
            } else {
                removeError('message');
            }
            
            if (isValid) {
                // Aquí iría el código para enviar el formulario
                // Por ahora solo mostramos un mensaje de éxito
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
            }
        });
    }
    
    // Función para validar email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Función para mostrar error en formulario
    function showError(fieldId, message) {
        const field = document.querySelector(`#${fieldId}`);
        let errorElement = field.nextElementSibling;
        
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        
        errorElement.textContent = message;
        field.classList.add('error');
    }
    
    // Función para eliminar error en formulario
    function removeError(fieldId) {
        const field = document.querySelector(`#${fieldId}`);
        const errorElement = field.nextElementSibling;
        
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        
        field.classList.remove('error');
    }
});

