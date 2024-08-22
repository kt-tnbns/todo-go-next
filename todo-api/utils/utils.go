package utils

import (
	"encoding/json"
	"net/http"
)

func EncodeToJSON(w http.ResponseWriter, r *http.Request, content interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(content)
}
