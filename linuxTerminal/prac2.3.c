/*Написание, компиляция и запуск программы, распечатывающей аргументы командной строки и параметры среды
В качестве примера самостоятельно напишите программу, распечатывающую значения аргументов командной строки и параметров окружающей среды для текущего процесса.*/

#include <stdio.h>
#include <unistd.h>
 
int main(int argc, char ** argv, char ** env) {
    char ** ptr;
    
    printf("Main process:\n");
    printf("\tParameters:\n");
    for ( ptr = argv; *ptr; ++ptr )
        printf("\t\t%s\n", *ptr);
    printf("\tEnvironment:\n");
    for ( ptr = env; *ptr; ++ptr )
        printf("\t\t%s\n", *ptr);
    printf("\n");
    
    if ( fork() == -1 ) {
        
            printf("error!\n");
       }     
        else if ( fork() == 0 ) {
printf("Child process:\n");
}
else{
       
            printf("Child process:\n");
            printf("\tParameters:\n");
            for ( ptr = argv; *ptr; ++ptr )
                printf("\t\t%s\n", *ptr);
            printf("\tEnvironment:\n");
            for ( ptr = env; *ptr; ++ptr )
                printf("\t\t%s\n", *ptr);
            printf("\n");
          
    }
    
    return 0;
}
