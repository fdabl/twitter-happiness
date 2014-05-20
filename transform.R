# ----------------------------------------------------------------
# Transforms the data/ratings.txt file into data/subset.txt
# which consists only of the columns 'word' and 'happiness_average'
# ----------------------------------------------------------------
data <- read.table('data/ratings.txt', header = TRUE)
subset <- data[, c('word', 'happiness_average')]

write.table(subset, 'data/subset.txt', row.names = FALSE, col.names = FALSE)
