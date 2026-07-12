
const cssFiles = [
  '68671.dbb320a484deb6bf.css', '1412.c47ff6c363b9383a.css', '79673.aa5348bb1d1921b2.css',
  '45553.9864068a697760ec.css', '12476.74fff6c44b81692b.css', '6922.3a689a6c3c08bc6f.css',
  '2634.830a06c0528aee69.css', '60559.bf949a93192512a7.css', '91279.120a93211e8c494d.css',
  '5517.58eafe9469b43dad.css', '74107.56a7cc2a4100512b.css', '87550.76cc9f76d18619ab.css',
  '3424.c958debdcae8106a.css', '55644.a45c9e0e2b49521d.css', '93886.db8db29e06bba401.css',
  '42657.2c321072c38de6bc.css', '89512.0e1e05181150f75b.css', '84570.bd3a10552d036363.css',
  '41307.dd798e2b72b64e81.css', '57093.ac0f1ba5715f1b20.css', '59913.e2d967318746abb7.css',
  '75430.2ddbc0631f11fd86.css', '64441.8a17d435e31a1188.css', '81788.973fe7c5219145c3.css',
  '93700.11ed9877f1ad1cc7.css', '42478.43950b6379533e6b.css', '65058.867e965e79cd6dc6.css',
  '10448.98d227d94fbeb7d4.css', '2677.1b3990bb7c729949.css', '54531.fa0bde9a5fa861e3.css',
  '57422.4c703fa4c53708dc.css', '63252.ff4e105b89d1aef4.css', '74252.05faf25f27507c96.css',
  '28758.9858d15fa1716965.css', '59564.170d8adc3fcdf9f7.css', '43407.a87be3713ffb59e1.css',
  '70530.71feb21d4f7fb4e7.css', '50624.7278563618e7dbef.css', '48757.4a2da132216d429a.css',
  '81280.006e4de58f117843.css', '94457.38340e7add000d20.css', '22713.10f737cd14f7f6ba.css',
  '479.1cab3bd9b73f21ee.css', '91035.1df3015cc6334d2c.css', '84177.564cabb0bf53c85d.css',
  '57459.d6931e0c45f65d3b.css', '21603.41afffe8c9181fc4.css', '72365.9bf79a9938d8ef5b.css',
  '81602.afcc256aa2c07f98.css', '41475.b21c5639d54ba6ac.css', '79542.2b25fc462bddd499.css',
  '80534.5956bfc071de1f5b.css', '96130.115e27238a2c8bb9.css', '394.b98244f1efb15236.css',
  '32285.0e422fc07a65d2eb.css', '62924.72da35315c124b30.css', '22467.2343bfdd3ddc08e4.css',
  '71934.354fbf96249b0fec.css', '28379.6c450d63dd8a9175.css', '39995.2a1693e001d46c6a.css',
  '25568.0dc46f0629a2cbfc.css', '64227.9fd9bc3a06261d51.css', '59867.5fa16c008d78e56e.css',
  '38805.6a6466c146d91be5.css', '38123.dbdefe80dcfc62ee.css', '31827.516fc12339bea1d8.css',
  '92164.9e76f4ef930f126a.css', '62493.65def246eab6937f.css', '41351.1702481891ea7a9d.css',
  '9191.1327376eb0952c06.css', '50704.d9a689cdfd3e7190.css', '89262.34072561fc3da8ea.css',
  '52370.0fb0baeb1446df07.css', '60256.b82287fd88e54675.css', '14653.8287f53de7e68d3e.css',
  '45733.7fdad3eedc6ae509.css', '78340.1e72c33d89849907.css', '72318.6ebd7dac324a8565.css',
  '48476.c0a0ae7ccf8ea1cb.css', '95178.3d9e6e4ad7f8cac1.css', '37777.c397d2e459c318f9.css',
  '29737.9d97430fed93f039.css', '73486.8d7a20d2017757bf.css', '56886.14d92dc7e8442cb0.css',
  '56051.babb8a83454e4138.css'
];
async function check() {
  for (let f of cssFiles) {
    let r = await fetch('https://discord.com/assets/' + f);
    let t = await r.text();
    let m = t.match(/@font-face\s*{[^}]*}/g);
    if (m) {
      console.log('File:', f);
      m.forEach(x => {
        if (!x.includes('gg sans') && !x.includes('Whitney')) {
          console.log(x);
        }
      });
    }
  }
}
check();

