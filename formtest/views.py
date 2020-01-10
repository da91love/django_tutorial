from django.shortcuts import render
from formtest.forms import MyForm, FilterForm
from django.template import loader
from django.http import HttpResponse


def test_i18n(request):

    return render(request, 'formtest/i18nTest.html')


def responseform(request):
    form = MyForm()

    return render(request, 'formtest/responseform.html', {'form': form})


def comparison(request, domain):
    form = FilterForm()

    content = {
        'domain': domain,
        'form': form,
    }

    return render(request, 'formtest/comparison.html', content)


def result(request):
 #if form is submitted
     if request.method == 'POST':
        myForm = MyForm(request.POST)

        if myForm.is_valid():
            name = myForm.cleaned_data['name']
            email = myForm.cleaned_data['email']
            feedback = myForm.cleaned_data['feedback']

            context = {
                'name': name,
                'email': email,
                'feedback': feedback
            }

            template = loader.get_template('formtest/result.html')

            return HttpResponse(template.render(context, request))



     else:
         form = MyForm()

     return render(request, 'formtest/responseform.html', {'form':form});
