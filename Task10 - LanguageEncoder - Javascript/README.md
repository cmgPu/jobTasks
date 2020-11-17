# Language Encoder

## Description
The goal of this task is to write an algorithm which will "encode" or rearange letters in words and sentences to sound silly but understandable to a person who knows the **rules**.

### Rules
* After **each vowel** in a word, you have to append the letter *P*
* After letter *P* you have to append the preceeding vowel
* If the word is not ending with vowel, that part without volwel is not changing
* If the word does not have vowels at all, it remains untouched

### Examples
medo = mepedopo (m**e**P**e**d**o**P**o**)\
glava = glapavapa (gl**a**P**a**v**a**P**a**)\
stol = stopol (st**o**P**o**l, no vowels after the letter L so the letter L is not modified)\
trst = trst (no vowels at all, no change)\
televizor = tepelepevipizopor\
moja kuća = mopojapa kupućapaq

## Definition of done
Run `npm run test` and make sure all tests are passing
