describe("TestArray", function() {

  it("Array should has length", function() {
    var arr = [1,2,3];
    //demonstrates use of custom matcher
    expect(arr.length).toBe(3);
  });

});
