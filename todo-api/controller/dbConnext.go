package controller

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func DBConnext() (*mongo.Collection, error) {
	connectionURI := "mongodb://127.0.0.1:27017"
	databaseName := "TodoGoNext"
	collectionName := "todo"

	clientOptions := options.Client().ApplyURI(connectionURI)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to MongoDB: %w", err)
	}

	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		return nil, fmt.Errorf("failed to ping MongoDB: %w", err)
	}

	fmt.Println("Connected to MongoDB")

	collection := client.Database(databaseName).Collection(collectionName)
	return collection, nil
}
