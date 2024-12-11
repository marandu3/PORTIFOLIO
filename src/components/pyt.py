def announcement(f):
    def wrap():
        print("about")
        f()
        print("done")
    return(wrap)
        

@announcement        
def greet():
    print ("hello")

greet()

    