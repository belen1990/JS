var losmesesdelano = ['E','F','M','A','M','J','J','A','S','O','N','D'];
console.log('ENERO JULIO NOVIEMBRE DICIEMBRE:',losmesesdelano[0], losmesesdelano[6], losmesesdelano[10], losmesesdelano[losmesesdelano.length-1] );
var es_rubia= false;
 if(es_rubia){console.log('te has tenido!!');
}else{
    console.log('mejor asi');
}

var altura= 160;
var peso= 56;
var estas_cachas;

if(peso <=altura-120){es_rubia=true; console.log('hola');
}else{
    es_rubia=false;
    console.log('ponte a hacer ejercicios, te sobran:', peso -altura-10);
}

if(peso=altura-100-20)
    {es_rubia=false;
    console.log('come mas');
}else if(peso <=altura-120)
    {es_rubia=true; 
    console.log('hola');

}else{
    es_rubia=false;
    console.log('ponte a hacer ejercicios, te sobran:', peso -altura-10);
}

if(peso=altura-100-20)
    {estas_cachas=false;
    console.log('come mas');
}else if(peso <=altura-120)
    {estas_cachas=true; 
    console.log('hola');

}else{
    estas_cachas=false;
    console.log('ponte a hacer ejercicios, te sobran:', peso -altura-10);
}

var num1 = 40;
var num2 = 20;
var num3 = 3;

if(num1 > num2  && num2 > num3)
{console.log (num1);
}else if(num1 > num3  && num3 > num2)
{console.log (num1);
}else if(num2 > num3 && num3 > num1 )
{console.log (num2);
}else if(num2 > num1 && num1 > num3)
{console.log (num2);
}else if(num3 > num2 && num2 > num1)
{console.log (num3);
}else if(num3 > num1 && num1 > num2)
{console.log (num3);}

