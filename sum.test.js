const data=require('./sum')
test("Object",()=>{
    expect(data()).toEqual({"one":1});
})