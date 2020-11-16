const { encode } = require('./app');

describe('Testing single words', () => {
    test('Word: banana', () => {
        expect(encode('banana')).toBe('bapanapanapa');
    });
    test('Word: jagoda', () => {
        expect(encode('jagoda')).toBe('japagopodapa');
    });
    test('Word: rukavice', () => {
        expect(encode('rukavice')).toBe('rupukapavipicepe');
    });
});

describe('Testing single words with non-vowel ending', () => {
    test('Word: stalak', () => {
        expect(encode('stalak')).toBe('stapalapak');
    });
    test('Word: trokut', () => {
        expect(encode('trokut')).toBe('tropokuput');
    });
    test('Word: televizor', () => {
        expect(encode('televizor')).toBe('tepelepevipizopor');
    });
});


describe('Testing single words first vowel letter ', () => {
    test('Word: Anakonda', () => {
        expect(encode('Anakonda')).toBe('Apanapakopondapa');
    });
    test('Word: Ivana', () => {
        expect(encode('Ivana')).toBe('Ipivapanapa');
    });
    test('Word: Uzalud', () => {
        expect(encode('Udomljavanje')).toBe('Upudopomljapavapanjepe');
    });
});

describe('Testing single words without vowels', () => {
    test('Word: Krk', () => {
        expect(encode('Krk')).toBe('Krk');
    });
    test('Word: trk', () => {
        expect(encode('trk')).toBe('trk');
    });
    test('Word: čvrst', () => {
        expect(encode('čvrst')).toBe('čvrst');
    });
});

describe('Testing sentences', () => {
    test('Sentence: Ja pišem dobar code', () => {
        expect(encode('Ja pišem dobar code')).toBe('Japa pipišepem dopobapar copodepe');
    });
    test('Sentence: Ovaj zadatak nije težak', () => {
        expect(encode('Ovaj zadatak nije težak')).toBe('Opovapaj zapadapatapak nipijepe tepežapak');
    });
    test('Sentence: Gle malu voćku poslije kiše', () => {
        expect(encode('Gle malu voćku poslije kiše')).toBe('Glepe mapalupu vopoćkupu poposlipijepe kipišepe');
    });
});

describe('Testing more complex sentences', () => {
    test('Sentence: Danas je sunčan dan i želim ga provesti u prirodi.', () => {
        expect(encode('Danas je sunčan dan i želim ga provesti u prirodi.')).toBe('Dapanapas jepe supunčapan dapan ipi žepelipim gapa propovepestipi upu pripiropodipi.');
    });
    test('Sentence: Ovo je, budimo realni, zanimljiv task!', () => {
        expect(encode('Ovo je, budimo realni, zanimljiv task!')).toBe('Opovopo jepe, bupudipimopo repeapalnipi, zapanipimljipiv tapask!');
    });
    test('Sentence: Ona se zove Ana-Marija ili tako nekako?', () => {
        expect(encode('Ona se zove Ana-Marija ili tako nekako?')).toBe('Oponapa sepe zopovepe Apanapa-Maparipijapa ipilipi tapakopo nepekapakopo?');
    });
});


