package main

//go:wasm-module yourmodulename
//export add
func Add(a, b int) int {
	return a + b
}

//go:wasm-module yourmodulename
//export fibonacci
func fibonacci(n int) int {
	if n < 2 {
		return 1
	}
	return fibonacci(n-2) + fibonacci(n-1)
}

func main() {
	// fmt.Println("Hello from Go!")
}
