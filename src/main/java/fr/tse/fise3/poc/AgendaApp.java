package fr.tse.fise3.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
//@EnableSwagger2
public class AgendaApp {

	public static void main(String[] args) {
		SpringApplication.run(AgendaApp.class, args);
		
	}

}
