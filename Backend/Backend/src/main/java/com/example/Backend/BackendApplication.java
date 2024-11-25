package com.example.Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.sql.Connection;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	private DataSource dataSource;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		try (Connection connection = dataSource.getConnection()) {
			if (connection.isValid(2)) {
				System.out.println(" Database is running and connected successfully!");
			} else {
				System.err.println(" Unable to validate the database connection.");
			}
		} catch (Exception e) {
			System.err.println(" Database connection failed: " + e.getMessage());
		}
	}
}
