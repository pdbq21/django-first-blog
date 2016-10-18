#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>


int main(){

printf("User: %i\nGroup: %i\n", getuid(), getgid());

return 0;
}
