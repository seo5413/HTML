def function_a1():
    print('module_a : functino_al 호출')
    function_a2()

def function_a2():
    print('module_a : function_a2 호출')

def function_a3():
    print('module_a : function_a3 호출')

def function_hello():
    print('module_a : function_hello 호출')

def function_goodbye():
    print('module_a : function_goodbye 호출')
    raise RuntimeError('의도적으로 에러 발생')

if __name__ == '__main__':
    print('module_a 메인 호출')


def function_b1(value):
    print('module_a : functino_al 호출')
    function_b1(value)

def function_a2(value):
    print('module_a : function_a2 호출')
    function_b1(value)

def function_a3(value):
    print('module_a : function_a3 호출')
    function_b1(value)
