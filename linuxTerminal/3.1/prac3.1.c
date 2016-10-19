/*Написание, компиляция и запуск программы для чтения информации из файла
Измените программу из предыдущего раздела так, чтобы она читала записанную ранее в файл информацию и печатала ее на экране. Все лишние операторы желательно удалить.*/

#include <sys/types.h>
#include <fcntl.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main(){

	int fd;
	ssize_t ret;
	char ch;

	fd = open("file", O_RDONLY);

	    if(fd < 0){
	        printf("Can\'t open file\n");
	        exit(-1); 
	    }else{

	printf("Read file: \n");

	while ((ret = read(fd, &ch, 1)) > 0)
{
	putchar(ch);

	}
}    
 

	    if(close(fd) < 0){ 
	        printf("Can\'t close file\n");
	    }
	    return 0; 
	}

