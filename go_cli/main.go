package main

//go:wasm-module yourmodulename
//export add
func Add(a, b int) int {
	return a + b
}

func main() {
	// fmt.Println("Hello from Go!")
}
