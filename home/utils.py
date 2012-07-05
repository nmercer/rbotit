setting = {'speed0': 80,
           'speed1': 110,
           'speed2': 140,
           'speed3': 175,
           'speed4': 250,
           'speed5': 350,
           'speed6': 450,

           'pitch0': 0,
           'pitch1': 15,
           'pitch2': 30,
           'pitch3': 50,
           'pitch4': 65,
           'pitch5': 80,
           'pitch6': 99,

           'amp0': 30,
           'amp1': 50,
           'amp2': 80,
           'amp3': 100,
           'amp4': 130,
           'amp5': 160,
           'amp6': 200}

def create_espeak_data(speed, pitch, amp, lang):
    return {'speed':setting[speed],
            'pitch':setting[pitch],
            'amp':setting[amp],
            'voice':lang}

