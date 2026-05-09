
             let score = JSON.parse(localStorage.getItem('score')) ||
             {
                wins : 0,
                losses : 0,
                Ties : 0
            };

             updateScoreElement();
            
            function playGame(PlayerMove){
                 const computerMove = computerMove_1();
                 
                 let result ='';
                  if(PlayerMove === 'scissors')
                  {

                    if(computerMove ==='rock')
                    {
                        result='You Lose';

                    }
                    else  if(computerMove ==='paper')
                    {
                        result='You Win';

                    }
                    else
                    {
                        result='TIE';
                    }
                 }
                else if(PlayerMove === 'paper')
                {
                     if(computerMove ==='rock')
                        {
                            result='You Win';

                        }
                        else  if(computerMove ==='paper')
                        {
                            result='TIE';

                        }
                        else
                        {
                            result='You Lose';
                        }
                }
                else if (PlayerMove === 'rock'){
                        if(computerMove ==='rock')
                        {
                            result='TIE';

                        }
                        else  if(computerMove ==='paper')
                        {
                            result='You Lose';

                        }
                        else
                        {
                            result='You Win';
                        }

                }
                if(result === 'You Win')
                {
                    score.wins = score.wins+1;
                }
                else if (result === 'You Lose')
                {
                    score.losses = score.losses+1;
                }
                else{
                    score.Ties = score.Ties+1;
                }
                
                localStorage.setItem('score',JSON.stringify(score));
                updateScoreElement();
                 document.querySelector('.js-result').innerHTML = `${result}`
                 document.querySelector(`.js-move`).innerHTML = `You <img src="rock-emoji.png" class="move">
              <img src="${computerMove}-emoji.png" class="move">
                Computer</p>`

            }
            function updateScoreElement()
            { 
                document.querySelector('.js-paragraph').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.Ties}`
            }
           
        function computerMove_1()
        {
            let number=0;
            number=Math.random();
            let computerMove='';
            
            if(number>0 && number<1/3)
            {
                computerMove ='rock';

            }
            else if(number>1/3 && number<2/3)
            {
                computerMove ='paper';

            }
            else 
            {
                computerMove ='scissors';

            }
            
            return computerMove;
        }
        
        
