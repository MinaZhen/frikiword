"use strict";

describe("logic (frikiword)", function () {

    describe("resetQuestions", function () {

        it("should create four array of objects with different questions and a length of 27", function() {
            externalBool = true;
            var test1 = resetQuestions();
            var test2 = resetQuestions();
            var test3 = resetQuestions();
            var test4 = resetQuestions();
    
            var equal = (test1[0].question === test2[0].question === test3[0].question === test4[0].question);
            expect(equal).toBeFalsy();
            equal = (test1[1].question === test2[1].question === test3[1].question === test4[1].question);
            expect(equal).toBeFalsy();
    
            expect(Array.isArray(test1)).toBeTruthy();
            expect(test1.length).toBe(27);
            expect(test1[0] instanceof Object).toBeTruthy();
    
            expect(Array.isArray(test2)).toBeTruthy();
            expect(test2.length).toBe(27);
            expect(test2[0] instanceof Object).toBeTruthy();
    
            expect(Array.isArray(test3)).toBeTruthy();
            expect(test3.length).toBe(27);
            expect(test3[0] instanceof Object).toBeTruthy();
    
            expect(Array.isArray(test4)).toBeTruthy();
            expect(test4.length).toBe(27);
            expect(test4[0] instanceof Object).toBeTruthy();
    
        });

    });

    describe ("round()", function() {

        it("should update id and return new question", function() {
            externalBool = true;
            var game = resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
    
            expect(game.length).toBe(27);
            expect(id).toBe(26);
            expect(round()).toBe(callback);
            expect(callback.search("CON LA A:") > -1).toBeTruthy();
            expect(id).toBe(0);
    
            expect(round()).toBe(callback);
            expect(callback.search("CON LA B:") > -1).toBeTruthy();
            expect(id).toBe(1);
    
            expect(round()).toBe(callback);
            expect(callback.search("CON LA C:") > -1).toBeTruthy();
            expect(id).toBe(2);
        });
    
        it("should return ranking if there are not questions left", function() {
            externalBool = true;
            score.length = 0;
            resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
    
            expect(id).toBe(26);
            expect(round()).toBe(callback);
    
            q = [{status: 3}];
            expect(round()).toBe("Has hecho 0 puntos");
            expect(callback.length).toBe(2);
            expect(callback[0]).toBe("Has hecho 0 puntos");
            expect(callback[1].n).toBe("");
            expect(callback[1].s).toBe(0);
        });
    
        it("should return ranking with 3 punctuations sorted", function() {
            externalBool = true;
            score.length = 0;
            resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
    
            expect(id).toBe(26);
            expect(round()).toBe(callback);
    
            q = [{status: 3}];
            ok = 2;
            name = "first";
            expect(round()).toBe("first, has hecho 200 puntos");
    
            resetQuestions();
    
            expect(id).toBe(26);
            expect(round()).toBe(callback);
    
            q = [{status: 3}];
            ok = 10;
            name = "second";
            expect(round()).toBe("second, has hecho 1000 puntos");
    
            resetQuestions();
    
            expect(id).toBe(26);
            expect(round()).toBe(callback);
            
            q = [{status: 3}];
            pasapalabra = 1;
            name = "third";
            expect(round()).toBe("third, has hecho -20 puntos");
    
            resetQuestions();
    
            expect(id).toBe(26);
            expect(round()).toBe(callback);
    
            q = [{status: 3}];
            name = "forth";
            expect(round()).toBe("forth, has hecho 0 puntos");
    
            expect(callback.length).toBe(5);
            expect(callback[0]).toBe("forth, has hecho 0 puntos");
    
            expect(callback[1].n).toBe("second");
            expect(callback[1].s).toBe(1000);
            expect(callback[2].n).toBe("first");
            expect(callback[2].s).toBe(200);
            expect(callback[3].n).toBe("forth");
            expect(callback[3].s).toBe(0);
            expect(callback[4].n).toBe("third");
            expect(callback[4].s).toBe(-20);
        });
    });

    describe("newQuestion()", function() {

        it("should return the question of current id", function() {
            externalBool = true;
            var game = resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
    
            expect(game.length).toBe(27);
            expect(id).toBe(26);
            expect(round()).toBe(callback);
            expect(newQuestion()).toBe(callback);
            expect(id).toBe(0);
            expect(newQuestion()).toBe(callback);
            expect(id).toBe(0);
    
            expect(round()).toBe(callback);
            expect(newQuestion()).toBe(callback);
            expect(id).toBe(1);
    
            id = 26;
            expect(newQuestion()).toBe(callback);
            expect(callback.search("CON LA Z:") > -1).toBeTruthy();
    
        });

    });

    describe("answer(param)", function() {

        it("should modify string, guess and return new question and delete the guessed one", function() {
            externalBool = true;
            var game = resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
    
            game[0].answer = "hola";
            game[1].answer = "hola";
            game[2].answer = "hola";
    
            expect(round()).toBe(callback);
            expect(ok).toBe(0);
    
            expect(answer("Ho-lÀ")).toBe(callback);
            expect(id).toBe(0);
            expect(ok).toBe(1);
    
            expect(answer("     _hólÀ.")).toBe(callback);
            expect(id).toBe(0);
            expect(ok).toBe(2);
            expect(wrong).toBe(0);
    
            expect(answer("")).toBe(callback);
            expect(id).toBe(0);
            expect(ok).toBe(2);
            expect(wrong).toBe(1);
    
        });
    
        it("should detect skipping question and/or return exit message", function() {
            externalBool = true;
            resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });

            expect(round()).toBe(callback);
    
            expect(answer(1)).toBe(callback);
            expect(id).toBe(1);
            expect(pasapalabra).toBe(1);
    
            expect(answer(1)).toBe(callback);
            expect(id).toBe(2);
            expect(pasapalabra).toBe(2);
            expect(ok).toBe(0);
            expect(wrong).toBe(0);
    
            expect(answer(0)).toBe(undefined);
            expect(callback).toBe("Quieres salir? <br> <small> Pulsa Pass o Exit para salir o Enter para continuar. </small>");
            
        });

        it("should throw error if not parameter is entered", function() {
            externalBool = true;
            resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });

            expect(round()).toBe(callback);
    
            expect(function() {
                answer();
            }).toThrow(Error('Not answer defined.'));
        })
    })

    describe("end()", function() {

        it("end() should redirect", function() {
            var href = end(true).toString();
            window.stop();
            expect(href).toBe("http://minazhen.blogspot.com");
        });
    
        it("end() should return to a initial screen and current question", function() {
            externalBool = true;
    
            resetQuestions();
            var callback = "";
            messenger.listen(function (st) {
                callback = st;
            });
            end(false);
            expect(typeof callback === "boolean").toBeTruthy();
            expect(callback).toBeTruthy();
    
            expect(round()).toBe(callback);
            expect(newQuestion()).toBe(callback);
            expect(ok).toBe(0);
    
            expect(typeof callback === "boolean").toBeFalsy();
            expect(callback).toBe(newQuestion());
        })
    });

})