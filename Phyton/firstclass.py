#print()
#variables
#Data type
#for/while loop
#lists
#if/elif/else stataments
#functions
#classes

# way to make comments - it's ignored as the code

#print() = output a specific message at the screen as a result

myName = "ola"
print("Hello!", end="\n")
print(myName)

#end - parameter
# new line \n

print("Paula", end="@")
print("Paula.com")


print("Hello", "Etin", "I", "Love", "Python", sep="-")

#variables - containers - store data values

#variable_name = data_value

my_name = "Paula"

my_fav_number = 1
my_fav_number = my_fav_number + 4

print(my_fav_number)

#datatype -
#string - "Paula", "4", "1.65" - Whatever is in double quotes is a string
#float - 1.0, 1.25
#integer - 1, 5, -1, 0 - positive and negative numbers
#boolean - True, False

#list - a collection of diferent data types, ordered, mutable, repeted
#     - start with square brackets []

#dictionary - a collection of data type, unordered, mutable, key pair value, no repet
# - mydict = start with a curly brackets {}
# - my dict = {
#   key: Value,
#   name: "Pau",
#.  city: "Calgary"
# }

#tuple - collection, ordered, immutable - data that you dont want to edit accidentable - eg. location = (1.343, 2.536)

#set - collection, no duplicate (unique items), mutable, unordered - use when we want unique items.
# name_of_students = {"Leena", "Etin", "Pooja", "Etin"}
# print (name_of_students)

#loop - repeating something over and again until a condition
# for loop - execute a set of statement, once for each item in list
# while loop - as long as a condition is true, execute this statement

#for loop
#for this item in list:
    #do this (set of statements)
my_students = ["Divya", "Ola", "Chigozie", "Paula"]

for student in my_students:
    print(student, "is a great student")
    print("{} is a great student".format(student))


#crate a list of numbers - print the number + 2 - creating a for loop

List_of_numbers = [1,2,3,4,5,6,7,8,9]
for number in List_of_numbers:
    print(number + 2)


#range - built-in function, 
# return the sequence of numbers, 
# start by default at 0, 
# by default it increase by 1, 
# stops before the specified number

#range(stop)
#  range(6). - 0,1,2,3,4,5
#range(start, stop, step)
#  range(1,10,2) - 1,3,5,7,9
#range(start,stop)
#  range(1,5) - 1,2,3,4

for i in range(5,20,4):
    print(i)

for Q1 in range(2,12):
    print(Q1)

for Q2 in range(2,12,3):
    print(Q2)

#for i in range(7):
#  if(i == 0 or i ==1):
#    list.append(i+1)
#  else:
#    list.append(list[-2]+list[-1])


#get the index - enumerate()
my_students = ["Divya", "Ola", "Chigozie", "Paula"]

for index, item in enumerate(my_students):
    print("at position", index, "is", item)


#while
#pre-condiction
#while consition:   
    #execution statamente
#aftercondition

#print 1 to 5

#number = 1
#while number <=5: #true
#   print(number) #do this
#   number += 1

#ask user for a input, keep asking until the input is 0
# input("ask question ere")
# int()


#number4 = 1
#while number4 !=0:
#    print(number4)
#    number4 = int(input("write a number"))



#number3 = 5

#while number3 >0:
#    print(number3)
#    number3 -= 1
#else:
#    Print("you have reached else, number3")



for i in range(3):
    print(i)
else:
    print("you have reached else", i)

#continue and break

#task 1:
#Ask the user for two values and append the two values to a list and print the list.
#task 2:
# Ask the user for a value and keep asking until the value is between 10 and 50. use a while loop.

#a = int(input("Please enter one number -"))
#b = int(int("Please enter second number -"))

#mylist = []


#LIST - 
empty_list = []
print(empty_list)
empty_list.append("Paula")
print(empty_list)


#index in list

#                0      1        2                       3                         4
#                -5     -4      -3                      -2                         -1
random_list = ["Divya", 58, "Sreyasi", ["1", "6", ["a", "e", "i"], "88", "25"], "Fatemeh"]
random_list.append("Paula")
print(random_list)

#postitive index - left to right starts from 0
print(random_list[3][1])

#negative index - right to left start from -1
print(random_list[-4])


#join 2 list

list_a = ["a", "b", "c"]
list_b = [1, 2, 3]
list_c = list_a + list_b

print(list_c)


#slicing
# wit_num [start:end:step] includes the start, exclude the end, only goes forward
wit_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(wit_num[1:6])
print(wit_num[1:8:3]) #1, 4, 7
print(wit_num[::]) #whole

#in the end is not specified it would include

s = "ABCDEFGHIJK"
print(s[2:9:3])



#
#if(condition is true):
#    do this
#elif(condition is true):
#    do this
#else(condition is true):

#function
#

#syntax

#def funct_name(part1, part2):  #one function, two parameters
#    execution statemente
#    par3= par1 + par2

#def addition(val1, val2):
#    print(val1+val2)
#    return val1 + val2

#result = addition(4,5)

#if type(result) == "str":
#    print("the result is a string")
#else:
#    print("The result is not a string")

# A police officer is looking for a criminal 
# who named Sam, who is a 34 year old female.
# Find the criminal from the suspectList

suspectList = [{
  'name': 'Sam',
  'sex': 'Male',
  'age': 21
}, {
  'name': 'John',
  'sex': 'Male',
  'age': 25
}, {
  'name': 'Sandra',
  'sex': 'Female',
  'age': 22
}, {
  'name': 'Sam',
  'sex': 'Male',
  'age': 34
}, {
  'name': 'Paula',
  'sex': 'Female',
  'age': 29
}, {
  'name': 'Sam',
  'sex': 'Female',
  'age': 34
}]


for suspect in suspectList:
    if suspect ['name'] == 'Sam' and suspect ['sex'] == 'Female' and suspect ['age'] == 34:
        print(suspect)
    else:
        print("not found")


print("2nds excersice")
x = 10
y = 20

if x > y:
    print(">")
elif x < y:
    print("<")
elif x==y:
    print("==")
else:
    print("no idea")


print("3rd excersice")
int_list = [2, 6, 1, 5, 9, 4, 10, 3, 8, 7]

int
