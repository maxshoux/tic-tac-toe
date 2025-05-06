            document.addEventListener('DOMContentLoaded', () => {
            const cells = document.querySelectorAll('.xo-cell');
            const status = document.getElementById('status');
            const resetBtn = document.getElementById('resetBtn');
            
            let currentPlayer = 'X';
            let gameState = ['', '', '', '', '', '', '', '', ''];
            let gameActive = true;
            
            const winningConditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], 
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6]             
            ];
            
            
            function handleCellClick(e) {
                const clickedCell = e.target;
                const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
                
                if (gameState[clickedCellIndex] !== '' || !gameActive) return;
                
                gameState[clickedCellIndex] = currentPlayer;
                clickedCell.textContent = currentPlayer;
                clickedCell.classList.add(currentPlayer.toLowerCase());
                
                checkResult();
            }
            
            
            function checkResult() {
                let roundWon = false;
                
                for (let i = 0; i < winningConditions.length; i++) {
                    const [a, b, c] = winningConditions[i];
                    
                    if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') continue;
                    
                    if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                        roundWon = true;
                        
                        // Highlight winning cells
                        document.querySelector(`[data-index="${a}"]`).classList.add('winning-cell');
                        document.querySelector(`[data-index="${b}"]`).classList.add('winning-cell');
                        document.querySelector(`[data-index="${c}"]`).classList.add('winning-cell');
                        break;
                    }
                }
                
                if (roundWon) {
                    status.textContent = `Player ${currentPlayer} wins!`;
                    gameActive = false;
                    return;
                }
                
                if (!gameState.includes('')) {
                    status.textContent = "Game ended in a draw!";
                    gameActive = false;
                    return;
                }
                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
            
            
            function resetGame() {
                currentPlayer = 'X';
                gameState = ['', '', '', '', '', '', '', '', ''];
                gameActive = true;
                status.textContent = `Player ${currentPlayer}'s turn`;
                
                cells.forEach(cell => {
                    cell.textContent = '';
                    cell.className = 'xo-cell';
                });
            }
            
            
            cells.forEach(cell => cell.addEventListener('click', handleCellClick));
            resetBtn.addEventListener('click', resetGame);
        });
        
        