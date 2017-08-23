import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  it('displays page title', async () => {
    let page = nightmare().goto('http://localhost:9090');

    let title = await page.evaluate(() => (document.title)).end();

    expect(title).toContain('Blog records')
  })
});
