/*Написание, компиляция и запуск программы с использованием вызова fork() с разным поведением процессов ребенка и родителя
Измените предыдущую программу с fork() так, чтобы родитель и ребенок совершали разные действия (какие – не важно).*/

#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
int main()
{
    pid_t pid, ppid;
     
    (void)fork();

   
    pid = getpid();
    ppid = getppid();


if(fork() == -1){
    printf("Error\n");
} else if (fork() == 0){
    
printf("Child process:  PID: %i,  PPID: %i\n", pid, ppid);
    
} else {
    /* родитель */
    printf("Parent process:  PID: %i,  fork: %i\n", pid,  fork());
}

    return 0;
}

