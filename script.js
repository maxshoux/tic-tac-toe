

        function createParticles() {
            const colors = ['rgba(212, 175, 55, 0.6)', 'rgba(255, 215, 0, 0.4)', 'rgba(255, 223, 0, 0.3)'];
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                

                const size = Math.random() * 10 + 5;
                const posX = Math.random() * window.innerWidth;
                const posY = Math.random() * window.innerHeight;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}px`;
                particle.style.top = `${posY}px`;
                particle.style.background = color;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                document.body.appendChild(particle);
            }
        }
        

        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            

            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                shakeCard();
            });
            

            document.addEventListener('keydown', function(e) {
                if (e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                    (e.ctrlKey && e.shiftKey && e.key === 'J') || 
                    (e.ctrlKey && e.key === 'U')) {
                    e.preventDefault();
                    shakeCard();
                }
            });
            
            
            function shakeCard() {
                const card = document.querySelector('.profile-card');
                card.style.animation = 'none';
                void card.offsetWidth;
                card.style.animation = 'shake 0.5s';
                
                setTimeout(() => {
                    card.style.animation = '';
                }, 500);
            }
            

            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-10px); }
                    40% { transform: translateX(10px); }
                    60% { transform: translateX(-10px); }
                    80% { transform: translateX(10px); }
                }
            `;
            document.head.appendChild(style);
        });