from django import forms

OPTIONS = (
    ("AUT", "Austria"),
    ("DEU", "Germany"),
    ("NLD", "Neitherlands"),
)

class MyForm(forms.Form):
    name = forms.CharField(label='Enter your name', max_length=100)
    email = forms.EmailField(label='Enter your email', max_length=100)
    feedback = forms.CharField(widget=forms.Textarea(attrs={'width':"100%", 'cols' : "80", 'rows': "20", }))
    Countries = forms.MultipleChoiceField(widget=forms.Select, choices=OPTIONS)

class FilterForm(forms.Form):
    ITEM_OPTIONS = [('--Select Item--',
        (
            ("001_BLACK", "001_BLACK"),
            ("002_WHITE", "002_WHITE"),
        )
    )]

    LOC_OPTIONS =[('--Select Location--',
         (
             ("US", "US"),
             ("JP", "JP"),
         )
     )]


    SNAPSHOT_OPTIONS = [('--Select Snapshot--',
         (
             ("batch_20190422", "batch_20190422"),
             ("batch_20190429", "batch_20190429"),
         )
     )]


    item = forms.ChoiceField(widget=forms.Select(attrs={
        'class': 'browser-default custom-select select-item',
    }), choices=ITEM_OPTIONS)
    location = forms.ChoiceField(widget=forms.Select(attrs={
        'class': 'browser-default custom-select select-loc',
    }), choices=LOC_OPTIONS)
    snapshot = forms.ChoiceField(widget=forms.Select(attrs={
        'class': 'browser-default custom-select select-snapshot',
    }), choices=SNAPSHOT_OPTIONS)
    period_from = forms.DateTimeField(
        input_formats=['%Y-%m-%d'],
        widget=forms.DateTimeInput(attrs={
            'class': 'border rounded',
            'type':'date'
        })
    )
    period_to = forms.DateTimeField(
        input_formats=['%Y-%m-%d'],
        widget=forms.DateTimeInput(attrs={
            'class': 'border rounded',
            'type':'date'
        })
    )