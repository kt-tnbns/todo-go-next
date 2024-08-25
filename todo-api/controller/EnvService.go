package controller

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func getDbInfo() (string, string, string) {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	connectionURI := os.Getenv("MONGO_URI")
	databaseName := os.Getenv("DATABASE_NAME")
	collectionName := os.Getenv("COLLECTION_NAME")

	if connectionURI == "" || databaseName == "" || collectionName == "" {
		log.Fatal("MONGO_URI, DATABASE_NAME, COLLECTION_NAME must be set")
	}

	return connectionURI, databaseName, collectionName

}
