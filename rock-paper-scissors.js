
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
                  if(PlayerMove === 'Scissors')
                  {

                    if(computerMove ==='Rock')
                    {
                        result='You Lose';

                    }
                    else  if(computerMove ==='Paper')
                    {
                        result='You Win';

                    }
                    else
                    {
                        result='TIE';
                    }
                 }
                else if(PlayerMove === 'Paper')
                {
                     if(computerMove ==='Rock')
                        {
                            result='You Win';

                        }
                        else  if(computerMove ==='Paper')
                        {
                            result='TIE';

                        }
                        else
                        {
                            result='You Lose';
                        }
                }
                else if (PlayerMove === 'Rock'){
                        if(computerMove ==='Rock')
                        {
                            result='TIE';

                        }
                        else  if(computerMove ==='Paper')
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
                 document.querySelector(`.js-move`).innerHTML = `You <img src="${PlayerMove}-emoji.png" class="move">
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
                computerMove ='Rock';

            }
            else if(number>1/3 && number<2/3)
            {
                computerMove ='Paper';

            }
            else 
            {
                computerMove ='Scissors';

            }
            
            return computerMove;
        }
        
        
