from example import *

def test_add():
    assert add(1, 2) == 3
    assert add(1, -2) == -1
    assert add(1000000000000000000, 2) == 1000000000000000002

def test_multiply():
    assert multiply(3,4) == 12
    assert multiply(2,2) == 4
    assert False, "please implement the rest of this test"

def test_div():
    assert div(10,5) == 2