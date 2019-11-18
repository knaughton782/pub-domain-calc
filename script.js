from datetime import date
year0 = date.today().year

def calc77():
'''This part of the calculator will determine when a song written after 1977 will enter the public domain'''
pub_year = (year2 + 70)
print(song, 'will enter the public domain in', pub_year)

def calcBC():
'''This part of the calculator will determine when a song written before 1977 will enter the public domain'''
pub_year = (year1 + 95)
print(song, 'will enter the public domain in', pub_year)

def antique():
'''This part of the calculator will tell you when a song has already been placed into the public domain'''
pub_year = (year1 + 95)
print(song, 'entered the public domain in', pub_year)

def still_alive():
'''This part of the calculator will handle the equation if the song was written after 1977 and the artist is still alive'''
pub_year = (year1 + 95)
print(song, 'won"t enter the public domain until at least', pub_year)

while True:
    song = input("What song would you like to learn about? ")
year1 = int(input('What year was the song released? '))

if year1 >= 1977:
    death = input('Is the writer still alive? (y/n) ')
if death == 'y':
    still_alive()
else:
year2 = int(input('What year did the writer die? '))
calc77()
if year1 < 1977:
    if year1 >= (year0 - 94):
        calcBC()
if year1 < (year0 - 95):
    antique()
if input("Would you like to learn about another song? (y/n) ") == 'n':
    break