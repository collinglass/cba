package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	log.Println("Starting Server")

	http.Handle("/", http.FileServer(http.Dir("./public/")))

	log.Println("Listening...")
	err := http.ListenAndServe(":"+os.Getenv("PORT"), nil)
	if err != nil {
		panic(err)
	}
}
