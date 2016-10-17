#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>


int main(){

printf("%i : %i", getuid(), getgid());


return 0;
}
