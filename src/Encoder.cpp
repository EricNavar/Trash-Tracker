#include <string>
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
	ifstream raw("tally.txt");
	ifstream templ("jsontemplate.txt");
	ofstream outfile("../../TrashScore/my-app/src/profiles.json");
	if (!raw.is_open())
		cout << "profiles.txt not open!" << endl;
	if (!templ.is_open())
		cout << "template.json not open!" << endl;

	string buff;
	int score;
	int i = 0;
	while (i < 4)
	{
		getline(templ, buff, '#');
		outfile << buff;
		raw >> buff;
		score = stoi(buff);
		outfile << score;
		i++;
	}
	outfile << endl;
	while (getline(templ, buff))
		outfile << buff << endl;
	return 0;
}