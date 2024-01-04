"use strict";
const fs = require("fs");
const { WASI } = require("wasi");
const wasi = new WASI();
const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

(async () => {
    const wasm = await WebAssembly.compile(
        fs.readFileSync("./main.wasm")
    );
    await WebAssembly.instantiate(wasm, importObject).then((instance) => {

        wasi.start(instance);
        const { add, fibonacci } = instance.exports;
        const addValues = add(420, 69);
        console.log({ addValues });
        console.log("Fibonacci")
        for (let i = 0; i < 10; i++) {
            console.log(fibonacci(i));
        }
    });

})();